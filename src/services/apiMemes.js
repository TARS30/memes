import supabase, { supabaseUrl } from "./supabase";


export async function getMemes() {
  const { data, error } = await supabase.from("memes").select("*");

  if (error) {
    console.error(error);
    throw new Error("memes could not be loaded");
  }

  return data;
}

export async function getMeme(id) {
  const { data, error } = await supabase
    .from("memes")
    .select("*")
    .eq("id", id)
    .single();
    
    if (error) {
      console.error(error);
      throw new Error("Meme not found");
    }

  return data ;
}

export const createEditMeme = async (newMeme, id) => {
  const hasImagePath = newMeme.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newMeme.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newMeme.image
    : `${supabaseUrl}/storage/v1/object/public/meme-picture/${imageName}`;

  let query = supabase.from("memes");

  if (!id) query = query.insert([{ ...newMeme, image: imagePath }]);

  if (id) query = query.update({ ...newMeme, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("meme could not be created");
  }

  if (hasImagePath) {
    return;
  }

  const { error: storageError } = await supabase.storage
    .from("meme-picture")
    .upload(imageName, newMeme.image);

  if (storageError) {
    await supabase.from("memes").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "meme image could not be uploaded and the meme was not created"
    );
  }

  return data;
};