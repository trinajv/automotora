import placeholderNoImage from "@images/placeholder-noimage.jpg";

export function mapCarsData(apiCars) {
  if (!Array.isArray(apiCars)) return [];

  return apiCars.map((item) => {
    const ad = item.ad || {};
    const spec = ad.specification || {};
    const price = ad.prices?.price || 0;

    // 🧠 Detecta cualquier variación posible en la API
    const media = ad.media || ad.meddia || ad.mediaa;

    // 🖼️ Imagen por defecto (importada localmente)
    let image = placeholderNoImage;

    // ✅ Usa la imagen de la API si existe y es válida
    if (Array.isArray(media?.images) && media.images.length > 0) {
      const candidate = media.images[0];
      if (candidate && candidate.startsWith("http")) {
        image = candidate;
      }
    }

    const mileage = spec.mileage
      ? new Intl.NumberFormat("es-CL").format(spec.mileage) + " km"
      : "-";

    return {
      id: ad.identifier || Math.random().toString(36).substring(2, 9), // fallback
      title: ad.keyword || "Sin título",
      image,
      price,
      year: spec.year || "-",
      version: spec.version || "",
      mileage,
      seller: item.seller?.name || "Sin vendedor",
      ribbon: ad.ribbon?.name || null,
      ribbonColor: ad.ribbon?.color || "#0051c5",
      ribbonTextColor: ad.ribbon?.textColor || "#ffffff",
    };
  });
}
