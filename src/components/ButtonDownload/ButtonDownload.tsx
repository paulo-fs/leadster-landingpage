import { HTMLAttributes } from "react";
import { IconCloud } from "./IconCloud";

interface ButtonDownloadProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'Spreadsheet.xls' | 'Document.doc' | 'Presentation.ppt' | 'Folder.zip'
}

enum ButtonType {
  SPREADSHEET = 'Spreadsheet.xls',
  DOCUMENT = 'Document.doc',
  PRESENTATION = 'Presentation.ppt',
  FOLDER = 'Folder.zip'
}

const colorSchema = {
  'Spreadsheet.xls': {
    BGlight: 'bg-green-buttonLight',
    BGmedium: 'bg-green-buttonMedium',
    StrokeDark: 'stroke-green-buttonDark',
    TextDark: 'text-green-buttonDark',
  },
  'Document.doc': {
    BGlight: 'bg-blue-buttonLight',
    BGmedium: 'bg-blue-buttonMedium',
    StrokeDark: 'stroke-blue-buttonDark',
    TextDark: 'text-blue-buttonDark',
  },
  'Presentation.ppt': {
    BGlight: 'bg-yellow-buttonLight',
    BGmedium: 'bg-yellow-buttonMedium',
    StrokeDark: 'stroke-yellow-buttonDark',
    TextDark: 'text-yellow-buttonDark',
  },
  'Folder.zip': {
    BGlight: 'bg-grayButton-buttonLight',
    BGmedium: 'bg-grayButton-buttonMedium',
    StrokeDark: 'stroke-grayButton-buttonDark',
    TextDark: 'text-grayButton-buttonDark',
  },
}

export function ButtonDownload({type, ...props}: ButtonDownloadProps) {
  return (
    <button {...props} className="h-8 flex items-center">
      <div className={`h-full w-8 grid place-content-center rounded-s ${colorSchema[type].BGmedium}`}>
        <IconCloud className={`w-4 h-4 ${colorSchema[type].StrokeDark}`} />
      </div>
      <span className={`
          h-full flex items-center rounded-e px-3 text-sm
          ${colorSchema[type].TextDark}
          ${colorSchema[type].BGlight}
        `}
      >
        {type}
      </span>
    </button>
  )
}
