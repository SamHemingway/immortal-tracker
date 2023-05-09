export default function useProgressExists(selectedFaction) {
  const parsedProgress = JSON.parse(window.localStorage.progress);

  const progressIndex = parsedProgress.findIndex(
    (entry) => entry.lordID === selectedFaction.lordID
  );

  if (progressIndex !== -1) {
    return parsedProgress[progressIndex];
  } else {
    return false;
  }
}
