export default function WorkCard(props: {
  titles: {
    name: string;
    duration?: string;
    stacks?: string[];
    link?: string;
  }[];
  company: string;
  duration: string;
}) {
  return (
    <div className="border-1 border-gray-300 shadow-md rounded-xl p-4 mb-8">
      <div className="flex justify-between">
        <div className="text-2xl">{props.company}</div>
        <div>{props.duration}</div>
      </div>
      <div>
        {props.titles?.map((title, i) => {
          return (
            <div
              key={i}
              className="flex justify-between border-l-2 border-dashed not-last:mb-4 pl-4"
            >
              <div>
                <a href={title.link} target="_blank" className="text-xl">
                  {title.link}
                </a>
                <div className="text-xl">{title.name}</div>
                {title.stacks && (
                  <div className="">
                    <strong>tech stack: </strong>
                    {title.stacks.join(", ")}
                  </div>
                )}
              </div>
              <div>{title.duration}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
