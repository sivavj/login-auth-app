export const AuthProvider = {
    isAuthenticated : false,
    signIn(callback: VoidFunction) {
        AuthProvider.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signOut(callback: VoidFunction) {
        AuthProvider.isAuthenticated = false;
        setTimeout(callback, 100)
    }
}