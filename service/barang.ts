import { barang } from "@/type/barang";
import { getServerCookies } from "@/lib/server-cookies";
import axios from "axios";
import { TOKO_URL } from "@/global";


type ResponseData = {
  status: boolean;
  message: string;
  data?: barang[];
}

export const GetBarang = async (): Promise<ResponseData> => {
  try {
    const token = await getServerCookies("token");
    console.log("data")
    const response = await axios.get(`${TOKO_URL}/admin/getbarang`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = response.data
    return {
      status: true,
      message: "Sip Jos Jis",
      data: data.data
    }
  } catch (error) {
    console.log("Error fetching barang:", error);
    return {
      status: false,
      message: "Kau Terlalu Cupu Untuk Mengakses Barang",
    }
  }
}

export const TambahBarang = async (formData: FormData) => {
  try {
    const token = await getServerCookies("token");
    const response = await axios.post(`${TOKO_URL}/admin/insertbarang`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = response.data
    console.log(data);
    return {
      status: true,
      message: "Barang berhasil ditambahkan",
    };
  } catch (error) {
    console.log("Error adding barang:", error);
    return {
      status: false,
      message: "Gagal menambahkan barang",
    };
  }
}

export const HapusBarang = async (id: number): Promise<ResponseData> => {
  try {
    const token = await getServerCookies("token");
    const response = await axios.delete(`${TOKO_URL}/admin/deletebarang/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = response.data;
    return {
      status: true,
      message: "Barang berhasil dihapus",
    };
  }
  catch (error) {
    console.log("Error deleting barang:", error);
    return {
      status: false,
      message: "Gagal menghapus barang",
    };
  }
}

export const EditBarang = async (id: number, formData: FormData) => {
  try {
    const token = await getServerCookies("token");
    const response = await axios.put(`${TOKO_URL}/admin/updatebarang/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = response.data;
    return {
      status: true,
      message: "Barang berhasil diupdate",
    };
  } catch (error) {
    console.log("Error updating barang:", error);
    return {
      status: false,
      message: "Gagal mengupdate barang",
    };
  }
}