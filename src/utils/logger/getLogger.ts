import { Logger } from "tslog";

export function getLogger(name: string): Logger {
    return new Logger({
      name,
      displayFilePath: "hidden",
      displayFunctionName: false,
      dateTimeTimezone: "Europe/Paris",
      dateTimePattern: "hour:minute:second.millisecond ",
    });
  }