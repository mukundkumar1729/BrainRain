$(document).ready(function(){    
    GetPrograms_JSONFile();
});

function GetPrograms_JSONFile() {
    GetPrograms(programs);
}

function GetPrograms(data){
    let el = $(control.CSharpProgramming);
    let isHtml = $(el).html();
    let html = "";
    if(isHtml.trim() == ""){
    for(let program of data){
        html= `<details>
                <summary onclick='ImplementAccordion();'>${program.ques}</summary>
                <p>${program.ans}</p>
                </details>`;
        $(el).append(html);
    }
}
}

function ImplementAccordion(){
    $('details').removeAttr('open');
}

function SearchQuestions(){
    ImplementAccordion();
    const searchText = $(control.searchForQuestions).val().trim().toLowerCase();
    const summary = $(control.summaryEl);
    for(let el of summary){
        let txt = $(el).text().trim().toLowerCase();
        if(txt.includes(searchText)){
            $(el).parent().show();
        }
        else{
            $(el).parent().hide();
        }
    }
}

var programs =[
    {
        ID:1,
        quesID:1,
        user:variables.userEmailID,
        domain:"prg",
        ques:"How to print pascal triangle in C# ?",
        ans:`
        <br/>
        using System;<br/>
        using System.Collections.Generic;<br/>
        using System.Linq;<br/>
        using System.Text;<br/>
        using System.Threading.Tasks; <br/><br/>
        
        namespace PascalTriangle <br/>
        { <br/>
            class Program <br/>
            {<br/>
                static void Main(string[] args) <br/>
                { <br/>
                    Console.WriteLine("Enter Order of Pascal triangle"); <br/>
                    int order = int.Parse(Console.ReadLine()); <br/>
                    int[] arr1 = new int[25]; <br/>
                    int[] arr2 = new int[25]; <br/>
                    arr1[0] = 1;          //holds the previous ordr element <br/>
                    arr2[0] = 1;          //holds the current order eement <br/>
                    for (int i = 0; i <= order; i++) <br/>
                    { <br/>
                        Console.Write("{0}:  ", i);<br/>
                        for (int space = order; space > i; space--) <br/>
                        { <br/>
                            Console.Write("  "); <br/>
                        } <br/>
                        for (int j = 0; j <= i; j++) <br/>
                        { <br/> <br/>
                            if (j != 0) <br/>
                                arr2[j] = arr1[j] + arr1[j - 1]; <br/>
                            Console.Write(arr2[j] + "  "); <br/>
                        } <br/>
                        Array.Copy(arr2, arr1, arr2.GetLength(0)); <br/>
                        Console.WriteLine("\n"); <br/>
                    } <br/>
                    Console.WriteLine("\n\n To find specific binomial coefficient enter 1"); <br/>
                    int pass = int.Parse(Console.ReadLine()); <br/>
                    if (pass == 1) <br/>
                    { <br/>
                        Console.WriteLine("Enter the value of n and r"); <br/>
                        int n = int.Parse(Console.ReadLine()); <br/>
                        int r = int.Parse(Console.ReadLine()); <br/>
                        Console.WriteLine("Binomial Coefficient is : {0}", BinomialCoefficient(n, r)); <br/> 
                        Console.ReadLine(); <br/>
                    } <br/>
                } <br/>
                static double BinomialCoefficient(int n, int r) <br/>
                { <br/>
                    if (r == 0) <br/>
                        return 1.0; <br/>
                    return ((double)n / r) * BinomialCoefficient((n - 1), (r - 1)); <br/>
                } <br/>
            } <br/>
        } <br/>
        `,
        CreatedDate:"2020/06/12/0"
	},
	{
        ID:2,
        quesID:2,
        user:variables.userEmailID,
        domain:"prg",
        ques:"How to swap two numbers without using third variable in C# ??",
        ans:`
             Answer ??? <br/> Answer ??? <br/> Answer ??? <br/>
        `,
        CreatedDate:"2020/06/12/0"
	},
	{
        ID:3,
        quesID:3,
        user:variables.userEmailID,
        domain:"prg",
        ques:"Finding count of a character in a word in C# ?",
        ans:`
            Answer ??? <br/> Answer ??? <br/> Answer ??? <br/>
        `,
        CreatedDate:"2020/06/12/0"
	},
	{
        ID:4,
        quesID:4,
        user:variables.userEmailID,
        domain:"prg",
        ques:"You need to find all the possible palindromes that can be obtained from a string which have length greater than 3?",
        ans:`
        <br/><br/>
        void Main()    <br/>  
        {    <br/>
            string str = Console.ReadLine();    <br/>
            int palMinLen  = 3; // minimum length of  palindrome    <br/>
            List<string> allPalindromes = AllPalindromes(str, palMinLen);    <br/>
            foreach(string s in allPalindromes)    <br/>
            {    <br/>
                Console.WriteLine(s);    <br/>
            }    <br/>
        }    <br/><br/>

        private List<string> AllPalindromes(string str, int palMinLen)    <br/>
        {    <br/>
            List<string> substrings = new List<string>();    <br/>
            int strLen = str.Length;    <br/>
            for(int len =palMinLen; len < strLen; len++) // len for Substring length which will be checked for palindrome    <br/>
            {    <br/>
                for(int i = 0; i < strLen; i++)    <br/>
                {    <br/>
                string pal = "";    <br/>
                if(i+len <= strLen)    <br/>
                {    <br/>
                    pal = str.Substring(i, len);    <br/>
                    bool isPalindrome = PalindromesChecker(pal);    <br/>
                    if(isPalindrome)    <br/>
                    {    <br/>
                        substrings.Add(pal);	    <br/>
                    }    <br/>
                }    <br/>
                }    <br/>
            }    <br/>
            return substrings;    <br/>
        }    <br/>    <br/>
        
        private bool PalindromesChecker(string str)    <br/>
        {    <br/>
            bool isPalindrome = true;    <br/>
            int len = str.Length;    <br/>
            int halfLen = (len+1)/2;    <br/>
            for(int i = 0 ; i < halfLen ; i++)    <br/>
            {    <br/>
                if(str[i] != str[len-i-1])    <br/>
                {    <br/>
                    isPalindrome = false;    <br/>
                    break;    <br/>
                }    <br/>
            }    <br/>
            return isPalindrome;    <br/>
        }    <br/>
        `,
        CreatedDate:"2020/06/12/0"
	},
	{
        ID:5,
        quesID:5,
        user:variables.userEmailID,
        domain:"prg",
        ques:"Write a code to print X ?",
        ans:`
        <br/>
        int r = 5;  <br/>
        int col = 2 * r - 1; <br/>
        int row = 2 * r;
        for(int i = 0; i < row; i++) <br/>
        { <br/>
            for(int j = 0; j < col; j++) <br/>
            { <br/>
                if(j == i || j == col-i-1) <br/>
                    { <br/>
                        Console.Write((i < r) ? i : row - i -2); <br/>
                    } <br/>
                    else <br/>
                    { <br/>
                        Console.Write("		"); <br/>
                    } <br/>
            } <br/>
            Console.WriteLine(); <br/>
        } <br/>
        `,
        CreatedDate:"2020/06/12/0"
	}
];