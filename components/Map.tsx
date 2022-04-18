import React, { memo, Dispatch, SetStateAction } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

interface Props {
  setTooltip: Dispatch<SetStateAction<any>>;
}

function Map({ setTooltip }: Props) {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 160 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  fetch(
                    `https://disease.sh/v3/covid-19/countries/${geo.properties.NAME}`
                  )
                    .then((response) => response.json())
                    .then((res) => setTooltip(res));
                }}
                onMouseLeave={() => setTooltip(null)}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
}

export default memo(Map);
