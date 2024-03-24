export default function TeamMemberCard({ name, role }) {
  return (
    <div className="cursor-grab bg-[#2e2e2e] rounded-md flex items-center p-12 mt-20 flex-col w-fit">
      <img
        className="rounded-[50%] h-[200px] w-[200px] mb-5"
        src="https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg"
        alt={role}
      />
      <p className="font-medium text-white uppercase text-[18px]">{name}</p>
      <p className="text-[var(--main-color)] font-normal text-[18px]">{role}</p>
    </div>
  );
}
