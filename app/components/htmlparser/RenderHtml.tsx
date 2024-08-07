import React from "react";
import HtmlStringComponent from "./HtmlStringComponent";

const RenderHtml = () => {
  const data = [
    {
      topicId: "e2e60e40-6dfd-488c-b9ae-548a2876691c",
      answer: [2],
      isFlagged: true,
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>‘rk; mq;fd;thb kw;Wk; Nghd; 2.0 jpl;lk; gw;wpa cz;ik vJ? </br> 1. Cuf tsh;r;rp mikr;rfk; nray;gLj;JfpwJ. </br> 2. Nghd; ,af;fk; 2.0 d; xU gFjpahFk;. </br> 3. epjp mikr;ruhy; 2021 gpg;uthpapy; njhlf;fk; </br> 4. 2023-24y; gl;n[l; xJf;fPL 25449 NfhbahFk;.</p>",
          language: "TAMIL",
        },
      ],
      choiceTranslationList: [
        [
          {
            choiceField: "1> 2 rhp",
            language: "TAMIL",
          },
        ],
        [
          {
            choiceField: "1> 2> 3 rh",
            language: "TAMIL",
          },
        ],
        [
          {
            choiceField: "1> 2> 4 rh",
            language: "TAMIL",
          },
        ],
        [
          {
            choiceField: "2> 3> 4 rh",
            language: "TAMIL",
          },
        ],
      ],
    },
    {
      topicId: "e2e60e40-6dfd-488c-b9ae-548a2876691c",
      answer: [0],
      isFlagged: true,
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>je;ij nghpahh; td tpyq;F ruzhyak; mike;Js;s khtl;lk</p>",
          language: "TAMIL",
        },
      ],
      choiceTranslationList: [
        [
          {
            choiceField: "Nfhit",
            language: "TAMIL",
          },
        ],
        [
          {
            choiceField: "Nryk",
            language: "TAMIL",
          },
        ],
        [
          {
            choiceField: "<NuhL",
            language: "TAMIL",
          },
        ],
        [
          {
            choiceField: "jpUg;G+h",
            language: "TAMIL",
          },
        ],
      ],
    },
    {
      topicId: "e2e60e40-6dfd-488c-b9ae-548a2876691c",
      answer: [2],
      isFlagged: true,
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> 2024-25 ,ilf;fhy gl;n[l;by; ,lk;ngw;w> ePyg;nghUsjhu vd;w nrhy;yhliyg; gpd;tUtdtw;Ws; vJ rpwg;ghf tpthpf;fpwJ.</p>",
          language: "TAMIL",
        },
      ],
      choiceTranslationList: [
        [
          {
            choiceField:
              "ngUq;fly;fs;> fly;fs; kw;Wk; flw;fiufs; njhlh;ghd epiyahd tsh;r;rp",
            language: "TAMIL",
          },
        ],
        [
          {
            choiceField: "fpuhkg;Gw cs;fl;likg;ig Nkk;gLj;Jjy",
            language: "TAMIL",
          },
        ],
        [
          {
            choiceField: "GJg;gpf;fj;jf;f Mw;wy; %yq;fs;",
            language: "TAMIL",
          },
        ],
        [
          {
            choiceField: "nghUsjhu tshr;rpiag; Nkk;gLj;Jjy",
            language: "TAMIL",
          },
        ],
      ],
    },
    {
      topicId: "e2e60e40-6dfd-488c-b9ae-548a2876691c",
      answer: [2],
      isFlagged: true,
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>2024 cyf Gw;WNeha; ehSf;fhd fUg;nghUs; vd;d?</p>",
          language: "TAMIL",
        },
      ],
      choiceTranslationList: [
        [
          {
            choiceField: "Together let’s do something",
            language: "ENGLISH",
          },
        ],
        [
          {
            choiceField: "We can I can",
            language: "ENGLISH",
          },
        ],
        [
          {
            choiceField: "Close the Care Gap",
            language: "ENGLISH",
          },
        ],
        [
          {
            choiceField: "I am and I will ",
            language: "ENGLISH",
          },
        ],
      ],
    },
  ];
  return (
    <div>
      {data.map((val: any, indexs: any) => {
        return val.questionTranslations.map((val: any, index: any) => {
          return (
            <div key={index} className="flex gap-4">
              <p>{indexs}.</p>
              <HtmlStringComponent htmlString={val.questionField} />
            </div>
          );
        });
      })}
    </div>
  );
};

export default RenderHtml;
