import Swal from 'sweetalert2'

export const showAlert = async ({ title, text }: { title: string, text: string }): Promise<void> => {
  try {
    await Swal.fire({
      title,
      text,
      icon: 'success'
    })
  } catch (error) {
    console.log(error)
  }
}
