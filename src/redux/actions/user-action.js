import { authService } from "../../services/auth-service"
import { error as failure, clear } from "/src/redux/reducers/alertReducer"
import { login } from "/src/redux/reducers/userReducer"

export const userActions = {
    logginUser,
    logoutUser
};

function logginUser(store, username, password) {
    return 
}

function logoutUser() {
    authService.logoutUser();
}