export default async function ({ $auth, redirect }) {
  if ($auth.user.role !== 'company') {
    return redirect('/')
  }
}
