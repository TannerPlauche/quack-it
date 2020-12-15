let chalk = require('chalk');

function quack(val) {
    let splits;
    let finalSplit = val;

    if (typeof val === 'string' && val.includes('\n')) {
        splits = val.split('\n');
        for (let i = 0; i < splits.length - 1; i++) {
            console.log(`    ${i === splits.length - 2 ? chalk.green('_ ') : '  '}    ` + chalk.blue('(') + splits[i] + chalk.blue(')'));
        }
        finalSplit = splits.pop();
    } else {
        console.log(`    ${chalk.green('_')}`);
    }


    console.log(chalk.green(' _( ᵒ)') + chalk.yellow(`<`) + chalk.blue(`  <(`) + chalk.black(finalSplit) + chalk.blue(`)`));
    console.log(chalk.green("`(_>_)"));
    console.log(chalk.yellow("  LL"));
};

quack(`This is a test`);