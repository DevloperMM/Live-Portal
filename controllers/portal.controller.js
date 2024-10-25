import axios from "axios";
import { Portal } from "../models/portal.model.js";
import { ApiError } from "../utils/ApiError.js";

const fetchData = async (req, res) => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    if (!response) {
      throw new ApiError(500, "Error while fetching data");
    }

    await Portal.deleteMany({});

    const tickers = Object.values(response.data).slice(0, 10);

    let result = [];
    for (let ticker of tickers) {
      let { name, last, buy, sell, volume, base_unit } = ticker;
      result.push(
        await Portal.create({
          name,
          last,
          buy,
          sell,
          volume,
          base_unit,
        })
      );
    }

    return res.status(200).render("portal.page.ejs", { result });
  } catch (err) {
    res.status(500).json(new ApiError(400, err?.message || "Error !!"));
  }
};

export { fetchData };
