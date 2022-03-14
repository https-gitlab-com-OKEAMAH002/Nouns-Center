import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { getRandomNounPic } from "../../utils";

interface EventProps {
  date: string;
  title: string;
  body: string;
  img?: string;
  link?: string;
  buttonText?: string;
}

const Event = ({ date, title, body, img, link, buttonText }: EventProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#D4D7E1", color: "#151c3b" }}
      contentArrowStyle={{ borderRight: "7px solid  #D4D7E1" }}
      className="vertical-timeline-element--work timelineEvent"
      date={date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<img className="rounded-full" src={getRandomNounPic()} />}
    >
      <h3 className="vertical-timeline-element-title text-nouns">{title}</h3>

      <p>{body}</p>

      {img !== "" && (
        <div className="rounded-lg overflow-hidden my-2">
          <img src={`/timeline/${img}`} alt={img} />
        </div>
      )}

      {link !== "" && (
        <div className="pt-4 pb-2">
          <a
            className="bg-nouns-cool-text rounded-md px-3 py-2 text-xs text-white"
            href={link}
            target="_blank"
          >
            {buttonText}
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default Event;
