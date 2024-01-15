import React from "react";

export interface ButtonProps {
  text?: string;
  handlePress?: () => void;
  style?: string;
}

export interface HeadProps {
  text: string;
  handleSearch: (text: string) => void;
  search: string;
}

export interface TextProps {
  text: string | undefined;
}

export interface ContainerProps {
  children: React.ReactNode;
  style?: string;
}

// redux
export interface IGenshinResponse {
  createdAt: string;
  updatedAt: string;
  name: string;
  star: number;
  url: string;
  __v: string;
  _id: string;
}

export interface RenderProps {
  item: IGenshinResponse;
}
