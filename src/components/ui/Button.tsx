type Props = {
  label: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ label, onClick }: Props) {
  return (
    <button type="submit" onClick={onClick} className="bg-blue-500 text-white px-2 py-1 rounded">{label}</button>
  )
}