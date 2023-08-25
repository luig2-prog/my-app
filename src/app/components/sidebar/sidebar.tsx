import Image from 'next/image'

export const SideBar = () => {
    return (
        <div className="frame-6">
        <div className="text-wrapper-23">Sparkle</div>
        <Image
          className="group-6"
          alt="Group"
          src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/group-179@2x.png"
        />
        <div className="group-7">
          <div className="group-8">
            <div className="text-wrapper-24">Inbox</div>
          </div>
          <div className="group-9">
            <div className="group-10">
              <div className="text-wrapper-25">Dashboard</div>
              <Image
                className="img-2"
                alt="Categorize"
                src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/categorize.svg"
              />
            </div>
          </div>
          <div className="group-11">
            <div className="group-12">
              <div className="text-wrapper-26">New</div>
              <Image
                className="img-2"
                alt="Inbox"
                src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/inbox.svg"
              />
            </div>
          </div>
          <div className="group-13">
            <div className="text-wrapper-27">Assigned to me</div>
            <Image
              className="img-2"
              alt="User"
              src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/user.svg"
            />
          </div>
          <div className="group-14">
            <div className="text-wrapper-27">Mentioned</div>
            <Image
              className="img-2"
              alt="Email"
              src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/email.svg"
            />
          </div>
          <div className="group-15">
            <div className="text-wrapper-26">Favourite</div>
            <Image
              className="img-2"
              alt="Star filled"
              src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/star-filled.svg"
            />
          </div>
          <div className="group-16">
            <div className="text-wrapper-26">Drafts</div>
            <Image
              className="img-2"
              alt="Edit"
              src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/edit.svg"
            />
          </div>
          <div className="group-17">
            <div className="text-wrapper-27">Closed</div>
            <Image
              className="img-2"
              alt="Checkmark"
              src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/checkmark.svg"
            />
          </div>
          <div className="group-18">
            <div className="text-wrapper-26">Snoozed</div>
            <Image
              className="img-2"
              alt="Snooze"
              src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/snooze.svg"
            />
          </div>
        </div>
      </div>
    );
};
