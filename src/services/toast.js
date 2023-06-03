import {
    toastController
  } from "@ionic/vue";

  const toast = async (position, color, text) => {
    const toast = await toastController.create({
        message: text,
        duration: 1500,
        position: position,
        color: color,
      });

      await toast.present();
  }

export default toast