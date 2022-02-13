export default async function ({ $auth, redirect }) {
  if ($auth.user.role !== 'user') {
    return redirect('/')
  }
}
