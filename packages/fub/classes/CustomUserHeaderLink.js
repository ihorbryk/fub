import React from "react";
import { CustomUserHeaderLink as CustomUserHeaderLinkTemplate } from "../ui/Header";

export class CustomUserHeaderLink {
  constructor(path, label) {
    this.path = path;
    this.label = label;
  }

  render(key) {
    return (
      <CustomUserHeaderLinkTemplate
        path={this.path}
        label={this.label}
        key={key}
      />
    );
  }
}
