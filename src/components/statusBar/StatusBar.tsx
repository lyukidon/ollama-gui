import { useQuery } from "@tanstack/react-query";
import { listLocalModels } from "../../utils/api";
import ModelList from "./ModelList";


const StatusBar = () => {
  const { data } = useQuery({
    queryKey: ["modelList"],
    queryFn: listLocalModels,
  });

  return (
    <div
      className="
      fixed top-0 left-0
      flex flex-row justify-between
      w-full h-[60px] pt-[12px] px-[10px]
      bg-white bg-opacity-80
    "
    >
      <ModelList list={data} />
    </div>
  );
};

export default StatusBar;
