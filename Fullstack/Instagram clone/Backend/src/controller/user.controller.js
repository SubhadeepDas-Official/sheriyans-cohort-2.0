const followModel = require('../models/follow.model');
const userModel = require('../models/users.model');

const followUserController = async (req, res) => {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  //checks if the user-B user-A trying to follow actually exists or not
  const isFolloweeExists = await userModel.findOne({
    username: followeeUsername,
  });
  if (!isFolloweeExists) {
    return res.status(404).json({
      message: 'User you are trying to follow does not exists!',
    });
  }

  //checks if the follower and followee is the same person or not
  if (followeeUsername == followerUsername) {
    return res.status(400).json({
      message: 'You cannot follow yourself!',
    });
  }

  //checks if user-A is already folowing user-B and the request is in pending state
  const existingFollowRequest = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  //if there is an existingFollowRequest depending upon each status response is generated
  if (existingFollowRequest) {
    switch (existingFollowRequest.status) {
      case 'pending':
        return res.status(200).json({
          message: 'Your request is already sent!',
        });

      case 'accepted':
        return res.status(200).json({
          message: `You are already following ${followeeUsername}`,
        });

      case 'rejected':
        existingFollowRequest.status = 'rejected';
        await existingFollowRequest.save();

        return res.status(200).json({
          message: 'Your follow request has been rejected!',
        });
    }
  }

  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });

  res.status(201).json({
    message: `You are following ${followeeUsername}`,
    follow: followRecord,
  });
};

const cancelFollowRequest = async (req, res) => {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const pendingRequest = await followModel.findOneAndDelete({
    follower: followerUsername,
    followee: followeeUsername,
    status: 'pending',
  });

  if (!pendingRequest) {
    return res.status(404).json({
      message: 'No pending request found!',
    });
  }

  res.status(200).json({
    message: 'Follow request cancelled!',
  });
};

const viewAllPendingFollowRequest = async (req, res) => {
  const followeeUsername = req.user.username; //here the loggedIn user becomes the followee

  const allPendingRequest = await followModel.find({
    followee: followeeUsername,
    status: 'pending',
  });

  if (!allPendingRequest) {
    return res.status(404).json({
      message: 'You have no pending requests!',
    });
  }

  res.status(200).json({
    message: 'Here are your all pending requests',
    allPendingRequest,
  });
};

const acceptFollowRequestController = async (req, res) => {
  const followeeUsername = req.user.username;
  const followerUsername = req.params.username;

  const pendingRequest = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
    status: 'pending',
  });

  if (!pendingRequest) {
    return res.status(404).json({
      message: 'You have no pending requests!',
    });
  }

  pendingRequest.status = 'accepted';

  await pendingRequest.save();

  res.status(200).json({
    message: 'Follow request accepted!',
  });
};

const rejectFollowRequestController = async (req, res) => {
  const followeeUsername = req.user.username;
  const followerUsername = req.params.username;

  const pendingRequest = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
    status: 'pending',
  });

  if (!pendingRequest) {
    return res.status(404).json({
      message: 'You have no pending requests!',
    });
  }

  pendingRequest.status = 'rejected';

  await pendingRequest.save();

  res.status(200).json({
    message: 'Follow request rejected!',
  });
};

const unfollowUserController = async (req, res) => {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (followerUsername == followeeUsername) {
    return res.status(400).json({
      message: 'Invalid Request!',
    });
  }

  if (!isUserFollowing) {
    return res.status(200).json({
      message: `You are not following ${followeeUsername}`,
    });
  }

  await isUserFollowing.deleteOne();
  // await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `You have unfollowed ${followeeUsername}`,
  });
};

module.exports = {
  followUserController,
  cancelFollowRequest,
  viewAllPendingFollowRequest,
  acceptFollowRequestController,
  rejectFollowRequestController,
  unfollowUserController,
};
