module.exports = {
    "buttonLabel": `Afficher les suggestions`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groupe ${args.groupTitle} rejoint, avec ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, s\xe9lectionn\xe9(s)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggestions`,
    "selectedAnnouncement": (args)=>`${args.optionText}, s\xe9lectionn\xe9`
};


//# sourceMappingURL=fr-FR.main.js.map
