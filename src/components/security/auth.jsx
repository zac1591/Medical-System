class Auth{
    constructor(){
        this.session_user = ""
        this.authenticated = false
    }
    login(cb){
        this.authenticated = true
        this.session_user = "Isaac"
        cb()
    }
    logout(cb){
        this.authenticated = false
        this.session_user = ""
        cb()
    }
    isAuthenticated(){
        return this.authenticated
    }
}

export default new Auth()