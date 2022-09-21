import APIclient from "./APIclient";

export async function getAWilder (){
    const {data} = await API.get("/wilders");
    return data
}

export async function createWilder (wilderProps) {
    return API

}