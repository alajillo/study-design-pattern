interface UserInfo {
    name : string
    age : number
    
}
class DataBase{
    private static userList : UserInfo[];
    constructor(){

    }
    public static getUserList(){
        if(!DataBase.userList){
            DataBase.userList = [];
        }
        return DataBase.userList;
    }
    public static addUser( userInfo : UserInfo){
        DataBase.userList.push(userInfo);
        return true;
    }
    public static getUsersByName( name : string){
        return DataBase.userList.filter(userInfo => userInfo.name === name);
    }
}


function client(){
    const userList = DataBase.getUserList();
    const newUser = {
        name : 'leo',
        age : 25
    }
    const newUser2 = {
        name : 'alex',
        age : 33
    }
    DataBase.addUser(newUser);
    DataBase.addUser(newUser2);
    const userNameLeo = DataBase.getUsersByName('leo');
    console.log('userList : ',userList);
    console.log('userNameLeo : ',userNameLeo);
}

client();