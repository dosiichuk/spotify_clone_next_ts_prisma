import formatDuration from "format-duration";

export const formatTime = (timeinSeconds = 0) => {
  return formatDuration(timeinSeconds * 1000);
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
