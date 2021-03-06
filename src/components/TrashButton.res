let actionBtnDefaultStyle = `action-btn dark:hover:text-slate_100 dark:hover:bg-slate-300 dark:active:bg-primary_50`

@react.component
let make = (~className: option<string>=?, ~onClick=?) => {
  let cn = switch className {
  | Some(c) => j`$actionBtnDefaultStyle $c`
  | None => actionBtnDefaultStyle
  }

  <button type_="button" className={cn} ?onClick>
    <TrashIcon className="h-full w-full" fillColor="var(--color-primary-600)" />
  </button>
}
