export const fileUpload = async (file: string): Promise<void> => {
  if (file === undefined) return

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dsa0l81kc/upload'
  const formData = new FormData()

  formData.append('upload_preset', 'garden-organizer')
  formData.append('file', file)

  try {
    const res = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    })

    if (!res.ok) throw new Error('Error uploadin')

    const cloudResp = await res.json()

    return cloudResp.secure_url
  } catch (error) {
    console.log(error)
  }
}
