
/**
 * This code is deployed as the Lambda function in AWS.
 * It just returns the input event as is
 */

exports.handler = async (event, context) => {
  return event;
};
