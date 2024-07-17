interface Props {
  name: string;
  desc: string;
}

const AvailableRidersCard = ({ name, desc }: Props) => {
  return (
    <div className="rounded-2xl space-y-4">
      <p className="text-2xl text-green-base">{name}</p>
      <p className="text-base text-generic-950 font-gilroy-regular">{desc}</p>
    </div>
  )
}

export default AvailableRidersCard