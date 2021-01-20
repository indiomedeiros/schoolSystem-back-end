import dayjs from "dayjs";

//formatar data usando o dayjs
export default function formatDate(dateString: string): string {
  const date: any = dateString.split("/");
  const dateFormat = dayjs()
    .set("year", date[2])
    .set("month", date[1])
    .set("day", date[0])
    .format("YYYY/MM/DD");
  return dateFormat;
}
