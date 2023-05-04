const addMeToMyCrushMind = <T>(myInfo: T) => {
    const crush = 'kate Winslate';
    const newData = { ...myInfo, crush };
    return newData;

}
const myInfo = {
    name: "Rahat",
    age: 28,
    salary: 1000000
}
const result5 = addMeToMyCrushMind(myInfo);

console.log(result5);