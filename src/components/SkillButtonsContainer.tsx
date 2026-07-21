import CardButton from './CardButton';

function SkillButtonsContainer({ skills, height }: { skills: string[], height:string}) {
  return (
    <div className={`w-full flex flex-wrap overflow-y-scroll h-${height} content-start`}>
      {skills?.map((skill) => <CardButton key={skill} text={skill} />)}
    </div>
  );
}

export default SkillButtonsContainer