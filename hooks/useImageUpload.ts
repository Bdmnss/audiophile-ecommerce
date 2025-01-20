import { supabase } from '@/app/supabase'

export const uploadImage = async (file: File): Promise<string> => {
  const filePath = `${Date.now()}_${file.name}`
  const { data, error } = await supabase.storage
    .from('products_images')
    .upload(filePath, file)

  if (error) {
    throw new Error(error.message)
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from('products_images').getPublicUrl(filePath)

  if (!publicUrl) {
    throw new Error('Failed to get public URL')
  }

  return publicUrl
}
