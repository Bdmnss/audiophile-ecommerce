import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/app/supabase'
import type { Database } from '@/app/supabase/supabase.types'

type Product = Database['public']['Tables']['products']['Row']
type InsertProduct = Database['public']['Tables']['products']['Insert']
type UpdateProduct = Database['public']['Tables']['products']['Update']

const fetchProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*')

  if (error) {
    throw new Error(error.message)
  }

  return data
}

const fetchProductBySlug = async (slug: string): Promise<Product> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

const addProduct = async (product: InsertProduct): Promise<Product> => {
  const { data, error } = await supabase
    .from('products')
    .insert(product)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

const updateProduct = async (product: UpdateProduct): Promise<Product> => {
  const { data, error } = await supabase
    .from('products')
    .update(product)
    .eq('id', product.id!)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const useProducts = () => {
  const queryClient = useQueryClient()

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  const productQuery = (slug: string) =>
    useQuery({
      queryKey: ['product', slug],
      queryFn: () => fetchProductBySlug(slug),
    })

  const addProductMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })

  return {
    ...productsQuery,
    productQuery,
    addProduct: addProductMutation.mutate,
    updateProduct: updateProductMutation.mutate,
  }
}
