﻿namespace _05.Closest_Two_Points
{
    using System;
    using System.Linq;

    public class ClosestTwoPoints
    {
        static void Main()
        {
            Point[] points = ReadPoints(); //• Create an array Point[] points that will keep all points.
            Point[] closest2Points = FindClosestTwoPoints(points);
            Console.WriteLine("{0:F3}", CalculateDistance(closest2Points[0], closest2Points[1]));
            Printpoint(closest2Points[0]);
            Printpoint(closest2Points[1]);
        }

        public static void Printpoint(Point point)
        {
            Console.WriteLine("({0}, {1})", point.X, point.Y);
        }

        public static Point[] FindClosestTwoPoints(Point[] points)
        {
            double minDistance = double.MaxValue;
            Point[] closestTwoPoints = null;
            for (int i1 = 0; i1 < points.Length; i1++)
            {
                for (int i2 = i1 + 1; i2 < points.Length; i2++)
                {
                    double distance = CalculateDistance(points[i1], points[i2]);
                    if (distance < minDistance)
                    {
                        minDistance = distance;
                        closestTwoPoints = new Point[] { points[i1], points[i2] };
                    }
                }
            }
            return closestTwoPoints;
        }
        public static double CalculateDistance(Point point1, Point point2)
        {
            double sideA = point1.X - point2.X;
            double sideB = point1.Y - point2.Y;
            double distan = Math.Sqrt(sideA * sideA + sideB * sideB);
            return distan;
        }

        public static Point[] ReadPoints()
        {
            int n = int.Parse(Console.ReadLine());
            Point[] points = new Point[n];
            for (int i = 0; i < n; i++)
            {
                points[i] = ReadPoint();
            }
            return points;
        }

        public static Point ReadPoint()
        {
            double[] array = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            Point p = new Point() { X = array[0], Y = array[1] };
            return p;
        }
    }
}