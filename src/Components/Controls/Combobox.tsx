import React, { useState, useRef } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import './Styles/Combobox.css'


interface DataList {
    prefecturesId: string;
    prefecturesName: string;
    city: {
      cityId: string;
      cityName: string;
    }[];
  }
  
  interface ComboBoxItem {
    id: string;
    value: string;
  }
  
  const InputData = [
    {
      prefecturesId: "1",
      prefecturesName: "全て",
      city: [
        {
          cityId: "1",
          cityName: "2022年",
        },
        {
          cityId: "2",
          cityName: "2021年",
        },
        {
          cityId: "3",
          cityName: "2020年",
        },
        {
          cityId: "4",
          cityName: "2019年",
        },
      ],
    },
    {
      prefecturesId: "2",
      prefecturesName: "国内株式",
      city: [
         {
            cityId: "1",
            cityName: "2022年",
          },
          {
            cityId: "2",
            cityName: "2021年",
          },
          {
            cityId: "3",
            cityName: "2020年",
          },
          {
            cityId: "4",
            cityName: "2019年",
          },
      ],
    },
    {
        prefecturesId: "3",
        prefecturesName: "米国株式",
        city: [
           {
             cityId: "1",
             cityName: "2022年",
           },
           {
             cityId: "2",
             cityName: "2021年",
           },
           {
             cityId: "3",
             cityName: "2020年",
           },
           {
             cityId: "4",
             cityName: "2019年",
           },
        ],
      },
  ];
  
  // INPUT用JSONデータ作成
  const Data = JSON.stringify(InputData);
  
  const Combobox = () => {
    // JSON形式のINPUTデータを取り出し
    const data = JSON.parse(Data);
    const inputData: DataList[] = Object.keys(data).map(function (key) {
      return data[key];
    });
  
    // 対象株式リストState管理
    const [prefecturesOptions] = useState<ComboBoxItem[]>(
      inputData.map((d) => {
        return {
          id: d.prefecturesId,
          value: d.prefecturesName,
        };
      })
    );
    // 対象株式リストで選択中の対象株式ID State管理
    const [selectedPrefecturesId, setSelectedPrefecturesId] = useState<string>(
      inputData[0].prefecturesId
    );
    // 対象株式（選択中）Ref管理
    const prefecturesOptionsRef = useRef(
      inputData
        .filter((d) => d.prefecturesId === selectedPrefecturesId)[0]
        .city.map((d) => {
          return {
            id: d.cityId,
            value: d.cityName,
          };
        })
    );
  
    // 対象年リストState管理
    const [selectedCityId, setSelectedCityId] = useState(
      inputData[0].city[0].cityId
    );
  
    // 対象年リスト変更時
    const onPrefecturesChangeHandler = (prefecturesId: string) => {
      //選択した対象株式をStateに設定
      setSelectedPrefecturesId(prefecturesId);
  
      //選択した対象株式の対象年一覧
      const selectedCity = inputData.filter(
        (d) => d.prefecturesId === prefecturesId
      )[0].city;
  
      //選択した対象年度の対象年リストの先頭を指定
      setSelectedCityId(selectedCity[0].cityId);
  
      //選択した対象株式の対象年をRefに指定
      prefecturesOptionsRef.current = selectedCity.map((d) => {
        return {
          id: d.cityId,
          value: d.cityName,
        };
      });
    };
  
    return (
      <div className="Combobox">
      <div className="ComboGroup1">
        <InputLabel className="ComboGroupLabel1">対象株式：</InputLabel>
        <FormControl className="form-width">
          <Select
            defaultValue={prefecturesOptions[0].id}
            value={selectedPrefecturesId}
            onChange={(e) => {
              if (e.target.value !== undefined) {
                onPrefecturesChangeHandler(e.target.value as string);
              }
            }}
          >
            {prefecturesOptions.map((item) => (
              <MenuItem value={item.id} key={item.id}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
        <div className="spacer"></div>
      <div className="ComboGroup2">
        <InputLabel className="ComboGroupLabel2">対象年：</InputLabel>
        <FormControl className="form-width">
          <Select
            defaultValue={"1"}
            value={selectedCityId}
            onChange={(e) => {
              if (e.target.value !== undefined) {
                setSelectedCityId(e.target.value as string);
              }
            }}
          >
            {prefecturesOptionsRef.current.map((item) => (
              <MenuItem value={item.id} key={item.id}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
      </div>
    );
  };
  
  export default Combobox;

