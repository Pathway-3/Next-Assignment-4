export default function UserProfile({ userName, userBio, userHobbies }) {
  {
    !userName || userBio || userHobbies ? <h1>Missing User Info</h1> : null;
  }

  return (
    <div>
      <h1>{userName}</h1>
      <p>{userBio}</p>
      <ul>
        {userHobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
