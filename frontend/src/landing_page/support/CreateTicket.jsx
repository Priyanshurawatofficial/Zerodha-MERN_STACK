import React from "react";
import {
  FaRegLightbulb,
  FaRegClock,
  FaRegSmile,
  FaQuestionCircle,
  FaBug,
  FaRocket
} from "react-icons/fa";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-3">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {/* Row 1 */}
        <div className="col-4 p-4 mt-3">
          <FaRegLightbulb size={30} className="mb-3 text-primary" />
          <h4>General Inquiry</h4>
          <p>If you have general questions or need help understanding our services, reach out here.</p>
        </div>

        <div className="col-4 p-4 mt-3">
          <FaRegClock size={30} className="mb-3 text-success" />
          <h4>Technical Support</h4>
          <p>Facing a technical issue? Let our team help you troubleshoot and resolve it promptly.</p>
        </div>

        <div className="col-4 p-4 mt-3">
          <FaRegSmile size={30} className="mb-3 text-warning" />
          <h4>Feedback</h4>
          <p>We’d love to hear your thoughts and suggestions to improve your experience with us.</p>
        </div>

        {/* Row 2 */}
        <div className="col-4 p-4 mt-3">
          <FaQuestionCircle size={30} className="mb-3 text-info" />
          <h4>Account Issues</h4>
          <p>Having trouble accessing your account or managing your profile? Submit a ticket here.</p>
        </div>

        <div className="col-4 p-4 mt-3">
          <FaBug size={30} className="mb-3 text-danger" />
          <h4>Report a Bug</h4>
          <p>Found something broken or not working? Help us fix it by reporting the bug.</p>
        </div>

        <div className="col-4 p-4 mt-3">
          <FaRocket size={30} className="mb-3 text-secondary" />
          <h4>Feature Request</h4>
          <p>Got a great idea? Let us know what feature you'd like to see in the future.</p>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
