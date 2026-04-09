const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-hohc-blue-500 flex w-2/3 flex-col items-center gap-4 justify-self-center rounded-xl p-8">
      <div className="w-1/2 bg-white p-5 text-center text-lg">
        {props.text1}
      </div>

      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-hohc-blue-100 w-full rounded-full p-5 text-center text-lg">
          {props.text2}
        </div>
        <div className="bg-hohc-blue-100 w-full rounded-full p-5 text-center text-lg">
          {props.text2}
        </div>
      </div>
      <div className="bg-hohc-blue-700 w-1/2 p-5 text-center text-lg text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
