import { useBalance } from "@repo/store/hooks";

export default function Page(): JSX.Element {
  const balance = useBalance();
  return (
    <div className="bg-slate-400">
      hi everyone!{balance}
    </div>
  );
}
