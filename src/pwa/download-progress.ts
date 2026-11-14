/** Shows a download's bytes in a Loading card: its label, its megabytes and its fraction. */
import { t } from "../i18n/live";
import type { Loading } from "../ui/components/loading";

/** The bytes of a megabyte, as the cache manager counts them. */
const MEGABYTE = 1024 * 1024;

/** Shows `progress` in `shown` under `label`. Before its total is known, the amount is blank. */
export function showProgress(shown: Loading | undefined, label: string, progress: { bytes: number; totalBytes: number }): void {
  const known = progress.totalBytes > 0;
  shown?.progress({
    label,
    amount: known ? t().player.shell.download.amount(progress.bytes / MEGABYTE, progress.totalBytes / MEGABYTE) : "",
    value: known ? progress.bytes / progress.totalBytes : 0,
  });
}
