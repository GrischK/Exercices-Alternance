import axios from "axios";
import { useState, useEffect } from "react";

import { IGrade } from "./Card";
import cross from "../assets/cross.png";

export interface ISkillCardProps {
  title: string;
  votes: string | number;
  skillId: number;
  wilderId: number;
  fetchSkills?: () => void;
  fetchWilders?: () => void;
}

export default function Skill({
  title,
  votes,
  skillId,
  wilderId,
  fetchSkills,
  fetchWilders,
}: ISkillCardProps) {
  const handleDelete = async (wilderId: number, skillId: number) => {
    await axios.delete(
      `http://localhost:5000/wilders/${wilderId}/skills/${skillId}`
    );
    fetchSkills?.();
    fetchWilders?.();
  };

  return (
    <li className="flex items-center gap-1">
      {title}
      <span className="votes">{votes}</span>
      <button
        className="customedButton2"
        type="button"
        onClick={() => handleDelete(wilderId, skillId)}
      >
        <img src={cross} />
      </button>
    </li>
  );
}
