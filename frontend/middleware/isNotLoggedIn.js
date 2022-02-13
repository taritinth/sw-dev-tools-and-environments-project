export default async function ({ $auth, redirect }) {
  if ($auth && $auth.loggedIn) {
    return redirect('/')
  }
}
