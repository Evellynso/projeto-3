export default function Profile({ avatar, name, bio, email, phone, githubUrl, instagramUrl }) {
    return (
        <div className="profile-card">
            <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
            <div className="texto">
                <h2 className="profile-name">{name}</h2>
                <p className="profile-bio">{bio}</p>
                <p className="profile-contact">Email: <a href={`mailto:${email}`}>{email}</a></p>
                <p className="profile-contact">Phone: <a href={`tel:${phone}`}>{phone}</a></p>
                <div className="profile-social">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </div>
    );
}
