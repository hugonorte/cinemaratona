import style from "./style.module.scss";

interface EvaluateBadgeProps {
  onClick?: () => void;
}

export default function EvaluateBadge({ onClick }: EvaluateBadgeProps) {
  return (
  <>
    <div className={style.evaluateBadge} onClick={onClick}>
        Que nota você daria para esse filme?
    </div>
  </>
  )
}
