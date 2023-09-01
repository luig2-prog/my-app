import Image from 'next/image'

export const Profile = () => {
    return (
        <div className="group-5">
        <Image
          className="oval"
          alt="Oval"
          src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/oval@2x.png"
        />
        <Image
          className="glyph-chevrondown"
          alt="Glyph chevrondown"
          src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/glyph---chevrondown.svg"
        />
      </div>
    );
};