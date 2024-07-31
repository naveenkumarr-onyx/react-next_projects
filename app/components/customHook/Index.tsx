import React from "react";
import useFetch from "./useFetch";
import Image from "next/image";

const Index = () => {
  const { data, loading, error }: any = useFetch(
    "https://dummyjson.com/recipes"
  );
  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="bg-red-200 grid grid-flow-row grid-cols-2 gap-3">
          {data?.recipes?.length > 0 &&
            data?.recipes.map((val: any) => (
              <div
                key={val.id}
                className=" grid gap-3 ml-6 max-w-[250px] items-center justify-center">
                <p>{val.name}</p>
                <Image src={val.image} alt="recipe" width={200} height={150} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Index;
